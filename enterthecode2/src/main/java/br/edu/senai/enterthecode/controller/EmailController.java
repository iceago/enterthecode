package br.edu.senai.enterthecode.controller;

import br.edu.senai.enterthecode.model.CodigosRecuperacao;
import br.edu.senai.enterthecode.model.Usuario;
import br.edu.senai.enterthecode.repository.CodigosRecuperacaoRep;
import br.edu.senai.enterthecode.repository.UsuarioRep;
import java.util.Random;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import org.simplejavamail.email.Email;
import org.simplejavamail.email.EmailBuilder;
import org.simplejavamail.mailer.Mailer;
import org.simplejavamail.mailer.MailerBuilder;
import org.simplejavamail.mailer.config.TransportStrategy;

@Path("/senha")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class EmailController {
    @POST
    public Response enviarSenha(Usuario jogador) {
        CodigosRecuperacaoRep crep = new CodigosRecuperacaoRep();
        UsuarioRep jrep = new UsuarioRep();
        Usuario j = jrep.buscarPoremail(jogador.getEmail());
        
        if (j != null) {
            CodigosRecuperacao c = new CodigosRecuperacao();
            String senha = geraSenha();
            c.setCodigo(senha);
            c.setEmail(j.getEmail());
            c.setIdusuario(j.getId());
            int a = 1;
            CodigosRecuperacao cod = null;
            try {
                cod = crep.buscarPorEmail(j.getEmail());
            } catch (Exception e) {
            }
            if(cod!=null){
                a=2;
                c.setId(cod.getId());
            }
            crep.salvar(c,a);

            Email email = EmailBuilder.startingBlank()
                    .from("Enter The Code Administration", "enterthecodeemailacount@gmail.com")
                    .to("pessoa que esqueceu a senha", jogador.getEmail())
                    .withSubject("CODIGO DE VERIFICAÇÃO")
                    .withPlainText("SEU CODIGO É: " + senha)
                    .buildEmail();

            Mailer mailer = MailerBuilder
                    .withSMTPServer("smtp.gmail.com", 587, "enterthecodeemailacount@gmail.com", "ANP0102C")
                    .withTransportStrategy(TransportStrategy.SMTP_TLS)
                    .withSessionTimeout(10 * 1000)
                    .clearEmailAddressCriteria()
                    .withDebugLogging(true)
                    .buildMailer();

            mailer.sendMail(email);
            return Response.status(200).entity(j.getEmail()).build();
        } else {
            return Response.status(500).entity("E").build();
        }
    }

    private String geraSenha() {
        int leftLimit = 97; // letter 'a'
        int rightLimit = 122; // letter 'z'
        int targetStringLength = 10;
        Random random = new Random();
        StringBuilder buffer = new StringBuilder(targetStringLength);
        for (int i = 0; i < targetStringLength; i++) {
            int randomLimitedInt = leftLimit + (int) (random.nextFloat() * (rightLimit - leftLimit + 1));
            buffer.append((char) randomLimitedInt);
        }
        String generatedString = buffer.toString();

        return generatedString;
    }
}


