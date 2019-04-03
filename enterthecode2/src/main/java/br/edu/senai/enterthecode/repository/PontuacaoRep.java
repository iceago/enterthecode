package br.edu.senai.enterthecode.repository;

import br.edu.senai.enterthecode.model.Modificador;
import br.edu.senai.enterthecode.model.Pontuacao;
import br.edu.senai.enterthecode.model.Usuario;
import br.edu.senai.enterthecode.util.Conexao;
import java.util.List;

public class PontuacaoRep {
    public void salvar(Pontuacao j) {
        j = validacao(j);
        if (j.getId()> 0) {
            Pontuacao p = buscarPorId(j.getIdusuario());
            UsuarioRep urep = new  UsuarioRep();
            Usuario u = urep.buscarPorId(j.getIdusuario());
            u.setPontostotais(u.getPontostotais() + j.getPontos());
            urep.salvar(u, 1);
            if(p.getPontos()<j.getPontos()){
                j.setId(p.getId());
                j.setNomeusuario(p.getNomeusuario());
                Conexao.getEM().merge(j);
            }           
        } else {
            Conexao.getEM().persist(j);
        }            
        efetivar();
    }
    public Pontuacao validacao(Pontuacao p){
        try {
            p.setNomeusuario(p.getNomeusuario().replace("script", ""));
        } catch (Exception e) {
        }
        return p;
    }
    public void excluir(Pontuacao j) {
        Conexao.getEM().remove(Conexao.getEM().merge(j));
        efetivar();
    }    
    
    public int pegacolocacao(int id){
        List<Pontuacao> lp = listaPontuacoes();
        Pontuacao p = buscarPorId(id);
        int a = lp.indexOf(p);
        return a;
    }
    
    public List<Pontuacao> pegatodospontos() {
        return Conexao.getEM().createQuery("select j from Pontuacao j").
                getResultList();
    }
    
    public List<Pontuacao> listaPontuacoes() {
        List<Pontuacao> pontos = Conexao.getEM().createQuery("select p from Pontuacao p ORDER BY p.pontos desc").getResultList();
        if(pontos.size()>10){
            return pontos.subList(0, 10);
        }
        return pontos;
    }
    
    public Pontuacao buscarPorId(int idusuario) {
        return (Pontuacao) Conexao.getEM().createQuery("select j from Pontuacao j where j.idusuario = :idusuario").
                    setParameter("idusuario", idusuario).getSingleResult();
    }
    
    private void efetivar() {
        Conexao.getEM().getTransaction().begin();
        Conexao.getEM().getTransaction().commit();
    }
}
