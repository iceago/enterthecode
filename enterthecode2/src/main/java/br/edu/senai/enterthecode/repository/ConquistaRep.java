package br.edu.senai.enterthecode.repository;

import br.edu.senai.enterthecode.model.Conquista;
import br.edu.senai.enterthecode.util.Conexao;
import java.util.List;

public class ConquistaRep {
    public void salvar(Conquista j) {
        if (j.getId()> 0) {
            Conexao.getEM().merge(j);
        } else {
            Conexao.getEM().persist(j);
        }            
        efetivar();
    }
    
    public void excluir(Conquista j) {
        Conexao.getEM().remove(Conexao.getEM().merge(j));
        efetivar();
    }    
    
    public List<Conquista> pegatodasconquistas() {
        return Conexao.getEM().createQuery("select j from Conquista j").
                getResultList();
    }
    
    public Conquista buscarPorId(int idusuario) {
        return (Conquista) Conexao.getEM().createQuery("select j from Conquista j where j.idusuario = :idusuario").
                    setParameter("idusuario", idusuario).getSingleResult();
    }
    
    private void efetivar() {
        Conexao.getEM().getTransaction().begin();
        Conexao.getEM().getTransaction().commit();
    }
}
