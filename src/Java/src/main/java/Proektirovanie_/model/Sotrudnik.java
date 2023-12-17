package Proektirovanie_.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Proektirovanie_.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: Сотрудник
 */
@Entity(name = "IISProektirovanie_Сотрудник")
@Table(schema = "public", name = "Сотрудник")
public class Sotrudnik {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ФИО")
    private String фио;

    @Column(name = "Должность")
    private String должность;

    @Column(name = "Отдел")
    private String отдел;

    @Column(name = "Оклад")
    private Integer оклад;

    @Column(name = "Тел")
    private String тел;


    public Sotrudnik() {
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

    public String getДолжность() {
      return должность;
    }

    public void setДолжность(String должность) {
      this.должность = должность;
    }

    public String getОтдел() {
      return отдел;
    }

    public void setОтдел(String отдел) {
      this.отдел = отдел;
    }

    public Integer getОклад() {
      return оклад;
    }

    public void setОклад(Integer оклад) {
      this.оклад = оклад;
    }

    public String getТел() {
      return тел;
    }

    public void setТел(String тел) {
      this.тел = тел;
    }


}