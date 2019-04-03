package br.edu.senai.enterthecode.repository;

import br.edu.senai.enterthecode.model.Usuario;
import br.edu.senai.enterthecode.util.Conexao;
import java.math.BigInteger;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.AbstractList;
import java.util.ArrayList;
import java.util.List;

public class UsuarioRep {

    public void salvar(Usuario j,int iduse) {
        if(iduse==2){
            String senha = criptografar(j.getSenha());
            j.setSenha(senha);
            Conexao.getEM().merge(j);
        }
        if (j.getId() > 0 && iduse==1) {
            Conexao.getEM().merge(j);
        }
        if(j.getId()==0){
            j = validacao(j);
            String senha = criptografar(j.getSenha());
            j.setSenha(senha);
            Conexao.getEM().persist(j);
        }
        efetivar();
    }

    public static Usuario logar(String login, String senha) {
        try {
            return (Usuario) Conexao.getEM().createQuery("select j from Usuario j where j.login = :username and j.senha = FUNC('MD5', :password)").
                    setParameter("username", login).
                    setParameter("password", senha).getSingleResult();
        } catch (Exception e) {
            System.out.println("Login inválido!");
            return null;
        }
    }

    public Usuario validacao(Usuario j) {
        if (j.getNome().length() > 30) {
            j.setNome(j.getNome().substring(0, 30));
        }
        if (j.getEmail().length() > 50) {
            j.setEmail(j.getEmail().substring(0, 50));
        }
        if (j.getLogin().length() > 20) {
            j.setLogin(j.getLogin().substring(0, 20));
        }
        if (j.getSenha().length() > 10) {
            j.setSenha(j.getSenha().substring(0, 10));
        }
        if (j.getDatanascimento().length() > 10) {
            j.setDatanascimento(j.getDatanascimento().substring(0, 10));
        }

        j.setNome(j.getNome().replace("script", ""));
        j.setEmail(j.getEmail().replace("script", ""));
        j.setLogin(j.getLogin().replace("script", ""));
        j.setSenha(j.getSenha().replace("script", ""));
        j.setDatanascimento(j.getDatanascimento().replace("script", ""));

        return j;
    }

    public void excluir(Usuario j) {
        Conexao.getEM().remove(Conexao.getEM().merge(j));
        efetivar();
    }

    public List<Usuario> pegatodosusuario() {
        return Conexao.getEM().createQuery("select j from Usuario j").
                getResultList();
    }

    public Usuario buscarPorId(int id) {
        return Conexao.getEM().find(Usuario.class, id);
    }

    
    public Usuario buscarPorlogin(String login) {
        try {
            return (Usuario) Conexao.getEM().createQuery("select j from Usuario j where TRIM(UPPER(j.login)) = :login").
                    setParameter("login", login.trim().toUpperCase()).getSingleResult();
        } catch (Exception e) {
            return null;
        }
    }

    public Usuario buscarPoremail(String email) {
        try {
            return (Usuario) Conexao.getEM().createQuery("select j from Usuario j where TRIM(UPPER(j.email)) = :email").
                    setParameter("email", email.trim().toUpperCase()).getSingleResult();
        } catch (Exception e) {
            return null;
        }
    }

    public Usuario buscarPornome(String nome) {
        try {
            return (Usuario) Conexao.getEM().createQuery("select j from Usuario j where TRIM(UPPER(j.nome)) = :nome").
                    setParameter("nome", nome.trim().toUpperCase()).getSingleResult();
        } catch (Exception e) {
            return null;
        }
    }

    private void efetivar() {
        Conexao.getEM().getTransaction().begin();
        Conexao.getEM().getTransaction().commit();
    }

    private String criptografar(String senha) {
        try {
            MessageDigest md = MessageDigest.getInstance("MD5");
            md.update(senha.getBytes(), 0, senha.length());
            return new BigInteger(1, md.digest()).toString(16);
        } catch (NoSuchAlgorithmException ex) {
            System.out.println("Deu erro para gerar senha md5 " + ex.getMessage());
        }
        return null;
    }
}
