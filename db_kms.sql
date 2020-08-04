/*==============================================================*/
/* DBMS name:      MySQL 5.0                                    */
/* Created on:     04/08/2020 15:30:00                          */
/*==============================================================*/


drop table if exists BALITA;

drop table if exists HASIL_TIMBANG;

drop table if exists USER;

/*==============================================================*/
/* Table: BALITA                                                */
/*==============================================================*/
create table BALITA
(
   ID_BAYI              int not null,
   NAMA_BAYI            varchar(50) not null,
   TEMPAT_LAHIR         varchar(50) not null,
   TANGGAL_LAHIR        date not null,
   JENIS_KELAMIN        varchar(20) not null,
   NAMA_AYAH            varchar(50) not null,
   ALAMAT_BAYI          varchar(100) not null,
   UMUR_BAYI            int not null,
   primary key (ID_BAYI)
);

/*==============================================================*/
/* Table: HASIL_TIMBANG                                         */
/*==============================================================*/
create table HASIL_TIMBANG
(
   ID_PENIMBANGAN       int not null,
   ID_BAYI              int not null,
   ID_USER              int not null,
   TANGGAL_PENIMBANGAN  date not null,
   BERAT                int not null,
   primary key (ID_PENIMBANGAN)
);

/*==============================================================*/
/* Table: USER                                                  */
/*==============================================================*/
create table USER
(
   ID_USER              int not null,
   NAMA_USER            varchar(50) not null,
   ALAMAT_USER          varchar(100) not null,
   NOHP_USER            varchar(12) not null,
   USERNAME             varchar(50) not null,
   PASSWORD             varchar(50) not null,
   primary key (ID_USER)
);

alter table HASIL_TIMBANG add constraint FK_MENCATAT3 foreign key (ID_USER)
      references USER (ID_USER) on delete restrict on update restrict;

alter table HASIL_TIMBANG add constraint FK_TERDAPAT foreign key (ID_BAYI)
      references BALITA (ID_BAYI) on delete restrict on update restrict;

