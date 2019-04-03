package br.edu.senai.enterthecode.controller;

import br.edu.senai.enterthecode.model.Pontuacao;
import br.edu.senai.enterthecode.model.Usuario;
import br.edu.senai.enterthecode.repository.PontuacaoRep;
import br.edu.senai.enterthecode.repository.UsuarioRep;
import br.edu.senai.enterthecode.status.MensagemStatus;
import java.util.List;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("/usuario")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class UsuarioController {
    private final UsuarioRep jrep = new UsuarioRep();
    
    @GET
    public List<Usuario> getAll() {
        return jrep.pegatodosusuario();
    }
    
    @GET
    @Path("{id}")
    public Usuario pegaid(@PathParam("id") int id) {
        return jrep.buscarPorId(id);
    }
    
    @GET
    @Path("{em}/{id}")
    public Usuario pegaemail(@PathParam("em") String em) {
        return jrep.buscarPoremail(em);
    }
    
    @POST
    @Path("{iv}")
    public Usuario salvar(Usuario j,@PathParam("iv") int id) {
        if(j.getId()>0){
            jrep.salvar(j, id);
        }else{
            if(jrep.buscarPorlogin(j.getLogin()) == null ){
            if (jrep.buscarPoremail(j.getEmail()) == null ) {
                if (jrep.buscarPornome(j.getNome()) == null ) {
                     jrep.salvar(j,id);
                }
            }
        }
        }
        return j;
    }
}
