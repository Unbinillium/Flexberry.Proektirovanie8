﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Proektirovanie_
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Номенклатура.
    /// </summary>
    // *** Start programmer edit section *** (Номенклатура CustomAttributes)

    // *** End programmer edit section *** (Номенклатура CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("НоменклатураE", new string[] {
            "ИмяТовара as \'Имя товара\'",
            "ЕдИзм as \'Ед изм\'",
            "ЭкоКласс as \'Эко класс\'",
            "ЗащСвойства as \'Защ свойства\'"})]
    [AssociatedDetailViewAttribute("НоменклатураE", "ГотТовар", "ГотТоварE", true, "", "Гот товар", true, new string[] {
            ""})]
    [AssociatedDetailViewAttribute("НоменклатураE", "ЗапасМатериалов", "ЗапасМатериаловE", true, "", "Запас материалов", true, new string[] {
            ""})]
    [View("НоменклатураL", new string[] {
            "ИмяТовара as \'Имя товара\'",
            "ЕдИзм as \'Ед изм\'",
            "ЭкоКласс as \'Эко класс\'",
            "ЗащСвойства as \'Защ свойства\'"})]
    public class Номенклатура : ICSSoft.STORMNET.DataObject
    {
        
        private string fИмяТовара;
        
        private string fЕдИзм;
        
        private string fЭкоКласс;
        
        private string fЗащСвойства;
        
        private IIS.Proektirovanie_.DetailArrayOfГотТовар fГотТовар;
        
        private IIS.Proektirovanie_.DetailArrayOfЗапасМатериалов fЗапасМатериалов;
        
        // *** Start programmer edit section *** (Номенклатура CustomMembers)

        // *** End programmer edit section *** (Номенклатура CustomMembers)

        
        /// <summary>
        /// ЕдИзм.
        /// </summary>
        // *** Start programmer edit section *** (Номенклатура.ЕдИзм CustomAttributes)

        // *** End programmer edit section *** (Номенклатура.ЕдИзм CustomAttributes)
        [StrLen(255)]
        public virtual string ЕдИзм
        {
            get
            {
                // *** Start programmer edit section *** (Номенклатура.ЕдИзм Get start)

                // *** End programmer edit section *** (Номенклатура.ЕдИзм Get start)
                string result = this.fЕдИзм;
                // *** Start programmer edit section *** (Номенклатура.ЕдИзм Get end)

                // *** End programmer edit section *** (Номенклатура.ЕдИзм Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Номенклатура.ЕдИзм Set start)

                // *** End programmer edit section *** (Номенклатура.ЕдИзм Set start)
                this.fЕдИзм = value;
                // *** Start programmer edit section *** (Номенклатура.ЕдИзм Set end)

                // *** End programmer edit section *** (Номенклатура.ЕдИзм Set end)
            }
        }
        
        /// <summary>
        /// ЗащСвойства.
        /// </summary>
        // *** Start programmer edit section *** (Номенклатура.ЗащСвойства CustomAttributes)

        // *** End programmer edit section *** (Номенклатура.ЗащСвойства CustomAttributes)
        [StrLen(255)]
        public virtual string ЗащСвойства
        {
            get
            {
                // *** Start programmer edit section *** (Номенклатура.ЗащСвойства Get start)

                // *** End programmer edit section *** (Номенклатура.ЗащСвойства Get start)
                string result = this.fЗащСвойства;
                // *** Start programmer edit section *** (Номенклатура.ЗащСвойства Get end)

                // *** End programmer edit section *** (Номенклатура.ЗащСвойства Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Номенклатура.ЗащСвойства Set start)

                // *** End programmer edit section *** (Номенклатура.ЗащСвойства Set start)
                this.fЗащСвойства = value;
                // *** Start programmer edit section *** (Номенклатура.ЗащСвойства Set end)

                // *** End programmer edit section *** (Номенклатура.ЗащСвойства Set end)
            }
        }
        
        /// <summary>
        /// ИмяТовара.
        /// </summary>
        // *** Start programmer edit section *** (Номенклатура.ИмяТовара CustomAttributes)

        // *** End programmer edit section *** (Номенклатура.ИмяТовара CustomAttributes)
        [StrLen(255)]
        public virtual string ИмяТовара
        {
            get
            {
                // *** Start programmer edit section *** (Номенклатура.ИмяТовара Get start)

                // *** End programmer edit section *** (Номенклатура.ИмяТовара Get start)
                string result = this.fИмяТовара;
                // *** Start programmer edit section *** (Номенклатура.ИмяТовара Get end)

                // *** End programmer edit section *** (Номенклатура.ИмяТовара Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Номенклатура.ИмяТовара Set start)

                // *** End programmer edit section *** (Номенклатура.ИмяТовара Set start)
                this.fИмяТовара = value;
                // *** Start programmer edit section *** (Номенклатура.ИмяТовара Set end)

                // *** End programmer edit section *** (Номенклатура.ИмяТовара Set end)
            }
        }
        
        /// <summary>
        /// ЭкоКласс.
        /// </summary>
        // *** Start programmer edit section *** (Номенклатура.ЭкоКласс CustomAttributes)

        // *** End programmer edit section *** (Номенклатура.ЭкоКласс CustomAttributes)
        [StrLen(255)]
        public virtual string ЭкоКласс
        {
            get
            {
                // *** Start programmer edit section *** (Номенклатура.ЭкоКласс Get start)

                // *** End programmer edit section *** (Номенклатура.ЭкоКласс Get start)
                string result = this.fЭкоКласс;
                // *** Start programmer edit section *** (Номенклатура.ЭкоКласс Get end)

                // *** End programmer edit section *** (Номенклатура.ЭкоКласс Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Номенклатура.ЭкоКласс Set start)

                // *** End programmer edit section *** (Номенклатура.ЭкоКласс Set start)
                this.fЭкоКласс = value;
                // *** Start programmer edit section *** (Номенклатура.ЭкоКласс Set end)

                // *** End programmer edit section *** (Номенклатура.ЭкоКласс Set end)
            }
        }
        
        /// <summary>
        /// Номенклатура.
        /// </summary>
        // *** Start programmer edit section *** (Номенклатура.ГотТовар CustomAttributes)

        // *** End programmer edit section *** (Номенклатура.ГотТовар CustomAttributes)
        public virtual IIS.Proektirovanie_.DetailArrayOfГотТовар ГотТовар
        {
            get
            {
                // *** Start programmer edit section *** (Номенклатура.ГотТовар Get start)

                // *** End programmer edit section *** (Номенклатура.ГотТовар Get start)
                if ((this.fГотТовар == null))
                {
                    this.fГотТовар = new IIS.Proektirovanie_.DetailArrayOfГотТовар(this);
                }
                IIS.Proektirovanie_.DetailArrayOfГотТовар result = this.fГотТовар;
                // *** Start programmer edit section *** (Номенклатура.ГотТовар Get end)

                // *** End programmer edit section *** (Номенклатура.ГотТовар Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Номенклатура.ГотТовар Set start)

                // *** End programmer edit section *** (Номенклатура.ГотТовар Set start)
                this.fГотТовар = value;
                // *** Start programmer edit section *** (Номенклатура.ГотТовар Set end)

                // *** End programmer edit section *** (Номенклатура.ГотТовар Set end)
            }
        }
        
        /// <summary>
        /// Номенклатура.
        /// </summary>
        // *** Start programmer edit section *** (Номенклатура.ЗапасМатериалов CustomAttributes)

        // *** End programmer edit section *** (Номенклатура.ЗапасМатериалов CustomAttributes)
        public virtual IIS.Proektirovanie_.DetailArrayOfЗапасМатериалов ЗапасМатериалов
        {
            get
            {
                // *** Start programmer edit section *** (Номенклатура.ЗапасМатериалов Get start)

                // *** End programmer edit section *** (Номенклатура.ЗапасМатериалов Get start)
                if ((this.fЗапасМатериалов == null))
                {
                    this.fЗапасМатериалов = new IIS.Proektirovanie_.DetailArrayOfЗапасМатериалов(this);
                }
                IIS.Proektirovanie_.DetailArrayOfЗапасМатериалов result = this.fЗапасМатериалов;
                // *** Start programmer edit section *** (Номенклатура.ЗапасМатериалов Get end)

                // *** End programmer edit section *** (Номенклатура.ЗапасМатериалов Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Номенклатура.ЗапасМатериалов Set start)

                // *** End programmer edit section *** (Номенклатура.ЗапасМатериалов Set start)
                this.fЗапасМатериалов = value;
                // *** Start programmer edit section *** (Номенклатура.ЗапасМатериалов Set end)

                // *** End programmer edit section *** (Номенклатура.ЗапасМатериалов Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "НоменклатураE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View НоменклатураE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("НоменклатураE", typeof(IIS.Proektirovanie_.Номенклатура));
                }
            }
            
            /// <summary>
            /// "НоменклатураL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View НоменклатураL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("НоменклатураL", typeof(IIS.Proektirovanie_.Номенклатура));
                }
            }
        }
    }
}
