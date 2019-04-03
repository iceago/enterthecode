package br.edu.senai.enterthecode.repository;

import br.edu.senai.enterthecode.model.Conquista;
import br.edu.senai.enterthecode.model.Modificador;
import br.edu.senai.enterthecode.model.Usuario;
import br.edu.senai.enterthecode.util.Conexao;
import java.util.List;

public class ModificadorRep {
    
    public void salvarusado(Modificador j){
            Conexao.getEM().merge(j);
    }
    
    public void salvar(Modificador j,int modcomprado) {
        if (j.getId()> 0) {
            UsuarioRep urep = new UsuarioRep();
            Usuario u = urep.buscarPorId(j.getIdusuario());
            if(modcomprado==1){
                if(u.getPontostotais()>=5000){
                    j.setQuantidadecoleteinicial(j.getQuantidadecoleteinicial()+1); 
                    u.setPontostotais(u.getPontostotais()-5000);
                }
            }
            if(modcomprado==2){
                if(u.getPontostotais()>=5000){
                    j.setQuantidadepocaohp(j.getQuantidadepocaohp()+1);
                    u.setPontostotais(u.getPontostotais()-5000);
                }
            }
            if(modcomprado==3){
                if(u.getPontostotais()>=5000){
                    j.setQuantidadepocaomana(j.getQuantidadepocaomana()+1);
                    u.setPontostotais(u.getPontostotais()-5000);
                }
            }
            if(modcomprado==4){
                if(u.getPontostotais()>=20000){
                    j.setQuantidadedobrodano(j.getQuantidadedobrodano()+1);
                    u.setPontostotais(u.getPontostotais()-20000);
                }
            }
            if(modcomprado==5){
                if(u.getPontostotais()>=10000){
                    j.setQuantidadesegundachance(j.getQuantidadesegundachance()+1);
                    u.setPontostotais(u.getPontostotais()-10000);
                }
            }
            if(modcomprado==6){
                if(u.getPontostotais()>=10000){
                    j.setQuantidadestarterpack(j.getQuantidadestarterpack()+1);
                    u.setPontostotais(u.getPontostotais()-10000);
                }
            }
            urep.salvar(u, 1);
            Conexao.getEM().merge(j);
        } else {
            Conexao.getEM().persist(j);
        }            
        efetivar();
    }
    public void excluir(Modificador j) {
        Conexao.getEM().remove(Conexao.getEM().merge(j));
        efetivar();
    }    
    public List<Modificador> pegatodosmodificadores() {
        return Conexao.getEM().createQuery("select j from Modificador j").
                getResultList();
    }
    
    public Modificador buscarPorId(int idusuario) {
        return (Modificador) Conexao.getEM().createQuery("select j from Modificador j where j.idusuario = :idusuario").
                    setParameter("idusuario", idusuario).getSingleResult();
    }
    
    private void efetivar() {
        Conexao.getEM().getTransaction().begin();
        Conexao.getEM().getTransaction().commit();
    }
}
