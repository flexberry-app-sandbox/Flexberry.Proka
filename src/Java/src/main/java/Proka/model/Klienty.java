package Proka.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Proka.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: Клиенты
 */
@Entity(name = "IISProkaКлиенты")
@Table(schema = "public", name = "Клиенты")
public class Klienty {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "НаимЗаказа")
    private String наимзаказа;

    @Column(name = "ИНН")
    private Integer инн;

    @Column(name = "Телефон")
    private Integer телефон;

    @Column(name = "ПунктПостав")
    private String пунктпостав;

    @Column(name = "РасСчет")
    private Integer рассчет;


    public Klienty() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getНаимЗаказа() {
      return наимзаказа;
    }

    public void setНаимЗаказа(String наимзаказа) {
      this.наимзаказа = наимзаказа;
    }

    public Integer getИНН() {
      return инн;
    }

    public void setИНН(Integer инн) {
      this.инн = инн;
    }

    public Integer getТелефон() {
      return телефон;
    }

    public void setТелефон(Integer телефон) {
      this.телефон = телефон;
    }

    public String getПунктПостав() {
      return пунктпостав;
    }

    public void setПунктПостав(String пунктпостав) {
      this.пунктпостав = пунктпостав;
    }

    public Integer getРасСчет() {
      return рассчет;
    }

    public void setРасСчет(Integer рассчет) {
      this.рассчет = рассчет;
    }


}