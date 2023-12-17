package Proektirovanie_.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Proektirovanie_.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: Поставщик
 */
@Entity(name = "IISProektirovanie_Поставщик")
@Table(schema = "public", name = "Поставщик")
public class Postavshhik {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ФИО")
    private String фио;

    @Column(name = "Регион")
    private String регион;

    @Column(name = "Адрес")
    private String адрес;

    @Column(name = "ИНН")
    private String инн;


    public Postavshhik() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getФИО() {
      return фио;
    }

    public void setФИО(String фио) {
      this.фио = фио;
    }

    public String getРегион() {
      return регион;
    }

    public void setРегион(String регион) {
      this.регион = регион;
    }

    public String getАдрес() {
      return адрес;
    }

    public void setАдрес(String адрес) {
      this.адрес = адрес;
    }

    public String getИНН() {
      return инн;
    }

    public void setИНН(String инн) {
      this.инн = инн;
    }


}