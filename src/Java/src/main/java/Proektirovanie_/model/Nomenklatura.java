package Proektirovanie_.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Proektirovanie_.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import java.util.List;

/**
 * Entity implementation class for Entity: Номенклатура
 */
@Entity(name = "IISProektirovanie_Номенклатура")
@Table(schema = "public", name = "Номенклатура")
public class Nomenklatura {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ИмяТовара")
    private String имятовара;

    @Column(name = "ЕдИзм")
    private String едизм;

    @Column(name = "ЭкоКласс")
    private String экокласс;

    @Column(name = "ЗащСвойства")
    private String защсвойства;

    @OneToMany(mappedBy = "nomenklatura", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<GotTovar> gottovars;

    @OneToMany(mappedBy = "nomenklatura", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<ZapasMaterialov> zapasmaterialovs;


    public Nomenklatura() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getИмяТовара() {
      return имятовара;
    }

    public void setИмяТовара(String имятовара) {
      this.имятовара = имятовара;
    }

    public String getЕдИзм() {
      return едизм;
    }

    public void setЕдИзм(String едизм) {
      this.едизм = едизм;
    }

    public String getЭкоКласс() {
      return экокласс;
    }

    public void setЭкоКласс(String экокласс) {
      this.экокласс = экокласс;
    }

    public String getЗащСвойства() {
      return защсвойства;
    }

    public void setЗащСвойства(String защсвойства) {
      this.защсвойства = защсвойства;
    }


}