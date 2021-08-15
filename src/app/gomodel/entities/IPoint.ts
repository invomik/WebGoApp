export interface IPoint {
   idgo_ptn?: string;
   idgo_place?: string;
   idgo_cat?: string;
   parentid?: string;
   idgo_bnk?: string;
   code?: string;
   name?: string;
   addr?: string;
   tmwork?: string;
   catstatus?: string;
   phone?: string;
   dtreg?: string;
   status_name?: string;
   place_name?: string;
   place_a3?: string;
   catname?: string;
   object_uir?: string;
   bankid?: string;
   bankcode?: string;
   bankcatname?: string;
   bankname?: string;
   placename?: string;
   countryname?: string;
   ctya3?: string;

   children?: IPoint[];
}
