package br.edu.senai.enterthecode.repository;

import br.edu.senai.enterthecode.model.CodigosRecuperacao;
import br.edu.senai.enterthecode.util.Conexao;

public class CodigosRecuperacaoRep {
    public void salvar(CodigosRecuperacao j, int mode) { 
        j = valida(j);
        if(mode==1){
            Conexao.getEM().persist(j); 
        }else{
            Conexao.getEM().merge(j);
        }
        efetivar();
    }
    public CodigosRecuperacao valida(CodigosRecuperacao c){
        c.setCodigo(c.getCodigo().replace("script", ""));
        c.setEmail(c.getEmail().replace("script", ""));
        return c;
    }
    public void excluir(int idus) {
        Conexao.getEM().createQuery("DELETE FROM CodigosRecuperacao j WHEARE j.idusuario = :id").
                    setParameter("id", idus);
        efetivar();
    } 
    
    public CodigosRecuperacao buscarPoridus(int id) {
        return (CodigosRecuperacao) Conexao.getEM().createQuery("select j from CodigosRecuperacao j where j.idusuario = :emailu").
                    setParameter("emailu", id).getSingleResult();
    }
    
    public CodigosRecuperacao buscarPorEmail(String email) {
        return (CodigosRecuperacao) Conexao.getEM().createQuery("select j from CodigosRecuperacao j where j.email = :emailu").
                    setParameter("emailu", email).getSingleResult();
    }
    
    private void efetivar() {
        Conexao.getEM().getTransaction().begin();
        Conexao.getEM().getTransaction().commit();
    }
}
