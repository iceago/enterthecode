package br.edu.senai.enterthecode.repository;

import br.edu.senai.enterthecode.model.Logs;
import br.edu.senai.enterthecode.util.Conexao;
import java.util.List;

public class LogsRep {
    
    public void salvar(Logs j) {
        j = valida(j);
        if (j.getId()> 0) {
            Conexao.getEM().merge(j);
        } else {
            Conexao.getEM().persist(j);
        }           
        efetivar();
    }
    public Logs valida(Logs l){
        l.setDataacesso(l.getDataacesso().replace("script", ""));
        l.setLoginusuario(l.getLoginusuario().replace("script", ""));
        l.setNomeusuario(l.getNomeusuario().replace("script", ""));
        return l;
    }
    public List<Logs> pegatodoslogs() {
        return Conexao.getEM().createQuery("select p from Logs p ORDER BY p.id desc").getResultList();               
    }
    
    private void efetivar() {
        Conexao.getEM().getTransaction().begin();
        Conexao.getEM().getTransaction().commit();
    }
}
