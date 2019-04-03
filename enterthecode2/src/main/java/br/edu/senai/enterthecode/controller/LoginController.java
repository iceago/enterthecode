package br.edu.senai.enterthecode.controller;

import br.edu.senai.enterthecode.JWTUtil;
import br.edu.senai.enterthecode.model.Credentials;
import br.edu.senai.enterthecode.model.Usuario;
import br.edu.senai.enterthecode.model.JogadorLogado;
import br.edu.senai.enterthecode.model.Logs;
import br.edu.senai.enterthecode.repository.LogsRep;
import br.edu.senai.enterthecode.repository.UsuarioRep;
import java.util.Calendar;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("/")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class LoginController {

    @POST
    @Path("/login")
    public Response login(Credentials credentials) {
        Usuario jogador = UsuarioRep.logar(credentials.getUsername(), credentials.getPassword());
        UsuarioRep urep = new UsuarioRep();
        Usuario u = urep.buscarPorlogin(credentials.getUsername());
        if(jogador != null){
            String token = JWTUtil.create(String.valueOf(jogador.getId()));
            JogadorLogado me = new JogadorLogado();
            me.setUsername(credentials.getUsername());
            me.setToken(token);
            me.setPerfil(jogador.getPerfil());
            me.setId(u.getId());
            geraLog(u);
            return Response.ok().entity(me).build();
        }else{
            return Response.status(Response.Status.UNAUTHORIZED).build();
        }
    }
    
    private void geraLog(Usuario j) {
        LogsRep lrep = new LogsRep();
        
        Calendar c = Calendar.getInstance();
        String data = c.get(Calendar.DAY_OF_MONTH) + "/" + ((c.get(Calendar.MONTH))+1) + "/" +
                c.get(Calendar.YEAR) + " " + c.get(Calendar.HOUR_OF_DAY) + ":" +
                c.get(Calendar.MINUTE) + ":" + c.get(Calendar.SECOND);
        
        Logs la = new Logs();
        la.setDataacesso(data);
        la.setLoginusuario(j.getLogin());
        la.setNomeusuario(j.getNome());
        lrep.salvar(la);
    }
}
