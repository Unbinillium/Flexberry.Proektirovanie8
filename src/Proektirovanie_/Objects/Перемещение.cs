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
    /// Перемещение.
    /// </summary>
    // *** Start programmer edit section *** (Перемещение CustomAttributes)

    // *** End programmer edit section *** (Перемещение CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ПеремещениеE", new string[] {
            "Сотрудник as \'Сотрудник\'",
            "Поставщик as \'Поставщик\'",
            "Товар as \'Товар\'",
            "Цена as \'Цена\'",
            "КолВо as \'Кол во\'",
            "Сумма as \'Сумма\'",
            "Номенклатура as \'Номенклатура\'",
            "Номенклатура.ИмяТовара as \'Имя товара\'",
            "Сотрудник as \'Сотрудник\'",
            "Сотрудник.ФИО as \'ФИО\'",
            "Поставщик as \'Поставщик\'",
            "Поставщик.ФИО as \'ФИО\'"}, Hidden=new string[] {
            "Номенклатура.ИмяТовара",
            "Сотрудник.ФИО",
            "Поставщик.ФИО"})]
    [MasterViewDefineAttribute("ПеремещениеE", "Номенклатура", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "ИмяТовара")]
    [MasterViewDefineAttribute("ПеремещениеE", "Сотрудник", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "ФИО")]
    [MasterViewDefineAttribute("ПеремещениеE", "Поставщик", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "ФИО")]
    [View("ПеремещениеL", new string[] {
            "Сотрудник as \'Сотрудник\'",
            "Поставщик as \'Поставщик\'",
            "Товар as \'Товар\'",
            "Цена as \'Цена\'",
            "КолВо as \'Кол во\'",
            "Сумма as \'Сумма\'",
            "Номенклатура.ИмяТовара as \'Имя товара\'",
            "Сотрудник.ФИО as \'ФИО\'",
            "Поставщик.ФИО as \'ФИО\'"})]
    public class Перемещение : ICSSoft.STORMNET.DataObject
    {
        
        private string fОтветственный;
        
        private string fПродавец;
        
        private string fТовар;
        
        private int fЦена;
        
        private int fКолВо;
        
        private int fСумма;
        
        private IIS.Proektirovanie_.Номенклатура fНоменклатура;
        
        private IIS.Proektirovanie_.Сотрудник fСотрудник;
        
        private IIS.Proektirovanie_.Поставщик fПоставщик;
        
        // *** Start programmer edit section *** (Перемещение CustomMembers)

        // *** End programmer edit section *** (Перемещение CustomMembers)

        
        /// <summary>
        /// КолВо.
        /// </summary>
        // *** Start programmer edit section *** (Перемещение.КолВо CustomAttributes)

        // *** End programmer edit section *** (Перемещение.КолВо CustomAttributes)
        public virtual int КолВо
        {
            get
            {
                // *** Start programmer edit section *** (Перемещение.КолВо Get start)

                // *** End programmer edit section *** (Перемещение.КолВо Get start)
                int result = this.fКолВо;
                // *** Start programmer edit section *** (Перемещение.КолВо Get end)

                // *** End programmer edit section *** (Перемещение.КолВо Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Перемещение.КолВо Set start)

                // *** End programmer edit section *** (Перемещение.КолВо Set start)
                this.fКолВо = value;
                // *** Start programmer edit section *** (Перемещение.КолВо Set end)

                // *** End programmer edit section *** (Перемещение.КолВо Set end)
            }
        }
        
        /// <summary>
        /// Ответственный.
        /// </summary>
        // *** Start programmer edit section *** (Перемещение.Ответственный CustomAttributes)

        // *** End programmer edit section *** (Перемещение.Ответственный CustomAttributes)
        [StrLen(255)]
        public virtual string Ответственный
        {
            get
            {
                // *** Start programmer edit section *** (Перемещение.Ответственный Get start)

                // *** End programmer edit section *** (Перемещение.Ответственный Get start)
                string result = this.fОтветственный;
                // *** Start programmer edit section *** (Перемещение.Ответственный Get end)

                // *** End programmer edit section *** (Перемещение.Ответственный Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Перемещение.Ответственный Set start)

                // *** End programmer edit section *** (Перемещение.Ответственный Set start)
                this.fОтветственный = value;
                // *** Start programmer edit section *** (Перемещение.Ответственный Set end)

                // *** End programmer edit section *** (Перемещение.Ответственный Set end)
            }
        }
        
        /// <summary>
        /// Продавец.
        /// </summary>
        // *** Start programmer edit section *** (Перемещение.Продавец CustomAttributes)

        // *** End programmer edit section *** (Перемещение.Продавец CustomAttributes)
        [StrLen(255)]
        public virtual string Продавец
        {
            get
            {
                // *** Start programmer edit section *** (Перемещение.Продавец Get start)

                // *** End programmer edit section *** (Перемещение.Продавец Get start)
                string result = this.fПродавец;
                // *** Start programmer edit section *** (Перемещение.Продавец Get end)

                // *** End programmer edit section *** (Перемещение.Продавец Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Перемещение.Продавец Set start)

                // *** End programmer edit section *** (Перемещение.Продавец Set start)
                this.fПродавец = value;
                // *** Start programmer edit section *** (Перемещение.Продавец Set end)

                // *** End programmer edit section *** (Перемещение.Продавец Set end)
            }
        }
        
        /// <summary>
        /// Сумма.
        /// </summary>
        // *** Start programmer edit section *** (Перемещение.Сумма CustomAttributes)

        // *** End programmer edit section *** (Перемещение.Сумма CustomAttributes)
        public virtual int Сумма
        {
            get
            {
                // *** Start programmer edit section *** (Перемещение.Сумма Get start)

                // *** End programmer edit section *** (Перемещение.Сумма Get start)
                int result = this.fСумма;
                // *** Start programmer edit section *** (Перемещение.Сумма Get end)

                // *** End programmer edit section *** (Перемещение.Сумма Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Перемещение.Сумма Set start)

                // *** End programmer edit section *** (Перемещение.Сумма Set start)
                this.fСумма = value;
                // *** Start programmer edit section *** (Перемещение.Сумма Set end)

                // *** End programmer edit section *** (Перемещение.Сумма Set end)
            }
        }
        
        /// <summary>
        /// Товар.
        /// </summary>
        // *** Start programmer edit section *** (Перемещение.Товар CustomAttributes)

        // *** End programmer edit section *** (Перемещение.Товар CustomAttributes)
        [StrLen(255)]
        public virtual string Товар
        {
            get
            {
                // *** Start programmer edit section *** (Перемещение.Товар Get start)

                // *** End programmer edit section *** (Перемещение.Товар Get start)
                string result = this.fТовар;
                // *** Start programmer edit section *** (Перемещение.Товар Get end)

                // *** End programmer edit section *** (Перемещение.Товар Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Перемещение.Товар Set start)

                // *** End programmer edit section *** (Перемещение.Товар Set start)
                this.fТовар = value;
                // *** Start programmer edit section *** (Перемещение.Товар Set end)

                // *** End programmer edit section *** (Перемещение.Товар Set end)
            }
        }
        
        /// <summary>
        /// Цена.
        /// </summary>
        // *** Start programmer edit section *** (Перемещение.Цена CustomAttributes)

        // *** End programmer edit section *** (Перемещение.Цена CustomAttributes)
        public virtual int Цена
        {
            get
            {
                // *** Start programmer edit section *** (Перемещение.Цена Get start)

                // *** End programmer edit section *** (Перемещение.Цена Get start)
                int result = this.fЦена;
                // *** Start programmer edit section *** (Перемещение.Цена Get end)

                // *** End programmer edit section *** (Перемещение.Цена Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Перемещение.Цена Set start)

                // *** End programmer edit section *** (Перемещение.Цена Set start)
                this.fЦена = value;
                // *** Start programmer edit section *** (Перемещение.Цена Set end)

                // *** End programmer edit section *** (Перемещение.Цена Set end)
            }
        }
        
        /// <summary>
        /// Перемещение.
        /// </summary>
        // *** Start programmer edit section *** (Перемещение.Номенклатура CustomAttributes)

        // *** End programmer edit section *** (Перемещение.Номенклатура CustomAttributes)
        [PropertyStorage(new string[] {
                "Номенклатура"})]
        [NotNull()]
        public virtual IIS.Proektirovanie_.Номенклатура Номенклатура
        {
            get
            {
                // *** Start programmer edit section *** (Перемещение.Номенклатура Get start)

                // *** End programmer edit section *** (Перемещение.Номенклатура Get start)
                IIS.Proektirovanie_.Номенклатура result = this.fНоменклатура;
                // *** Start programmer edit section *** (Перемещение.Номенклатура Get end)

                // *** End programmer edit section *** (Перемещение.Номенклатура Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Перемещение.Номенклатура Set start)

                // *** End programmer edit section *** (Перемещение.Номенклатура Set start)
                this.fНоменклатура = value;
                // *** Start programmer edit section *** (Перемещение.Номенклатура Set end)

                // *** End programmer edit section *** (Перемещение.Номенклатура Set end)
            }
        }
        
        /// <summary>
        /// Перемещение.
        /// </summary>
        // *** Start programmer edit section *** (Перемещение.Поставщик CustomAttributes)

        // *** End programmer edit section *** (Перемещение.Поставщик CustomAttributes)
        [PropertyStorage(new string[] {
                "Поставщик"})]
        [NotNull()]
        public virtual IIS.Proektirovanie_.Поставщик Поставщик
        {
            get
            {
                // *** Start programmer edit section *** (Перемещение.Поставщик Get start)

                // *** End programmer edit section *** (Перемещение.Поставщик Get start)
                IIS.Proektirovanie_.Поставщик result = this.fПоставщик;
                // *** Start programmer edit section *** (Перемещение.Поставщик Get end)

                // *** End programmer edit section *** (Перемещение.Поставщик Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Перемещение.Поставщик Set start)

                // *** End programmer edit section *** (Перемещение.Поставщик Set start)
                this.fПоставщик = value;
                // *** Start programmer edit section *** (Перемещение.Поставщик Set end)

                // *** End programmer edit section *** (Перемещение.Поставщик Set end)
            }
        }
        
        /// <summary>
        /// Перемещение.
        /// </summary>
        // *** Start programmer edit section *** (Перемещение.Сотрудник CustomAttributes)

        // *** End programmer edit section *** (Перемещение.Сотрудник CustomAttributes)
        [PropertyStorage(new string[] {
                "Сотрудник"})]
        [NotNull()]
        public virtual IIS.Proektirovanie_.Сотрудник Сотрудник
        {
            get
            {
                // *** Start programmer edit section *** (Перемещение.Сотрудник Get start)

                // *** End programmer edit section *** (Перемещение.Сотрудник Get start)
                IIS.Proektirovanie_.Сотрудник result = this.fСотрудник;
                // *** Start programmer edit section *** (Перемещение.Сотрудник Get end)

                // *** End programmer edit section *** (Перемещение.Сотрудник Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Перемещение.Сотрудник Set start)

                // *** End programmer edit section *** (Перемещение.Сотрудник Set start)
                this.fСотрудник = value;
                // *** Start programmer edit section *** (Перемещение.Сотрудник Set end)

                // *** End programmer edit section *** (Перемещение.Сотрудник Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ПеремещениеE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ПеремещениеE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ПеремещениеE", typeof(IIS.Proektirovanie_.Перемещение));
                }
            }
            
            /// <summary>
            /// "ПеремещениеL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ПеремещениеL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ПеремещениеL", typeof(IIS.Proektirovanie_.Перемещение));
                }
            }
        }
    }
}
