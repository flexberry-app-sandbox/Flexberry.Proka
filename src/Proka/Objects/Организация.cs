﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Proka
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Организация.
    /// </summary>
    // *** Start programmer edit section *** (Организация CustomAttributes)

    // *** End programmer edit section *** (Организация CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ОрганизацияE", new string[] {
            "Наименование as \'Наименование\'"})]
    [View("ОрганизацияL", new string[] {
            "Наименование as \'Наименование\'"})]
    public class Организация : ICSSoft.STORMNET.DataObject
    {
        
        private string fНаименование;
        
        // *** Start programmer edit section *** (Организация CustomMembers)

        // *** End programmer edit section *** (Организация CustomMembers)

        
        /// <summary>
        /// Наименование.
        /// </summary>
        // *** Start programmer edit section *** (Организация.Наименование CustomAttributes)

        // *** End programmer edit section *** (Организация.Наименование CustomAttributes)
        [StrLen(255)]
        public virtual string Наименование
        {
            get
            {
                // *** Start programmer edit section *** (Организация.Наименование Get start)

                // *** End programmer edit section *** (Организация.Наименование Get start)
                string result = this.fНаименование;
                // *** Start programmer edit section *** (Организация.Наименование Get end)

                // *** End programmer edit section *** (Организация.Наименование Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Организация.Наименование Set start)

                // *** End programmer edit section *** (Организация.Наименование Set start)
                this.fНаименование = value;
                // *** Start programmer edit section *** (Организация.Наименование Set end)

                // *** End programmer edit section *** (Организация.Наименование Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ОрганизацияE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ОрганизацияE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ОрганизацияE", typeof(IIS.Proka.Организация));
                }
            }
            
            /// <summary>
            /// "ОрганизацияL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ОрганизацияL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ОрганизацияL", typeof(IIS.Proka.Организация));
                }
            }
        }
    }
}
