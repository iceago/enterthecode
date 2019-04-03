package br.edu.senai.enterthecode.status;

public class MensagemStatus {
    private int id;
    private String mensagem;

    public MensagemStatus(int id, String mensagem) {
        this.id = id;
        this.mensagem = mensagem;
    }
    
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getMensagem() {
        return mensagem;
    }

    public void setMensagem(String mensagem) {
        this.mensagem = mensagem;
    }
    
}
