/*
select
(select bnk.name from go_bnk bnk where bnk.idgo_bnk = ptn.idgo_bnk) bnk_name,
TFN.S_PTNID,
TFN.*,
DTSEND DTTFN,
DTCREATE S_DT,
DTPAY R_DT
from Go_Tfn TFN, Go_PTN ptn where tfn.s_ptnid = ptn.idgo_ptn and tfn.tfnnum = '71111035';
 */
export interface ITfn {
  bnk_name?: string;
  tfnnum?: string;
  idgo_cur?: string;
  catstatus?: string;
  s_tfnctya3?: string;
  sumtfn?: string;
  s_fname?: string;
  s_mname?: string;
  s_lname?: string;
  r_fname?: string;
  r_mname?: string;
  r_lname?: string;
  s_ctya3?: string;
  dtcreate?: string;
  dtcreate_rm?: string;

  idgo_tfn?: string;
  sumtax1?: string;
  sumtax2?: string;
  sumtax3?: string;
  sumtax4?: string;
  note?: string;
  tfnmsg?: string;
  s_ptnid?: number;
  s_tdoc?: number;
  s_docser?: string;
  s_docnum?: string;
  s_docgivdt?: string;
  s_docgiv?: string;
  s_plcbth?: string;
  s_daybth?: string;
  s_phone?: string;
  s_region?: string;
  s_place?: string;
  s_addr?: string;
  s_email?: string;
  d_placeid?: string;
  d_place?: string;
  r_tdoc?: string;
  r_docser?: string;
  r_docnum?: string;
  r_docgivdt?: string;
  r_docgiv?: string;
  r_plcbth?: string;
  r_daybth?: string;
  r_ctya3?: string;
  r_region?: string;
  r_place?: string;
  r_addr?: string;
  r_phone?: string;
  r_email?: string;
  r_ptnid?: string;
  dtpay_rm?: string;
  s_migrcard?: string;
  r_migrcard?: string;
  s_acc?: string;
  r_acc?: string;
  s_isres?: number;
  r_isres?: number;
  d_ctya3?: string;
  s_natctya3?: string;
  r_natctya3?: string;
  s_zipcode?: string;
  r_zipcode?: string;
  catkind?: string;
  r_ctybth?: number
  s_ctybth?: string;
  sumtax?: number;
  s_docpdr?: string;
  r_docpdr?: string;
  s_idcard?: string;
  r_idcard?: number;
  pc_card?: string;
  r_fname_r?: string;
  r_lname_r?: string;
  r_mname_r?: string;
  s_rcv_lat?: string;
  dtsend?: string;
  s_faddr?: string;
  r_faddr?: string;
  s_area?: string;
  s_city?: string;
  s_placetype?: number;
  s_infrtype?: number;
  s_infrname?: string;
  s_house?: string;
  s_house_bl?: string;
  s_house_st?: string;
  s_flat?: string;
  r_area?: string;
  r_city?: string;
  r_placetype?: number;
  r_infrtype?: number;
  r_infrname?: string;
  r_house?: string;
  r_house_bl?: string;
  r_house_st?: string;
  r_flat?: string;
  s_regionnum?: string;
  r_regionnum?: string;
  d_outerid?: number;
  s_outerid?: string;
  dtpay?: string;
  dtsend_rm?: string;
  r_dtpay?: string;
  swift_tax?: string;
  s_outer_tfn_eid?: string;
  s_idgo_cnt?: number;
  r_idgo_cnt?: number;
  s_sx?: string;
  r_sx?: string;
  s_fin_code?: string;
  r_fin_code?: string;
  dttfn?: string;
  s_dt?: string;
  r_dt?: string;
  info?: string;
}

