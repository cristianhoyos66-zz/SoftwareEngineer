drop table if exists assessments_tbl;
drop table if exists self_assessments_tbl;
drop table if exists employees_tbl;
drop table if exists profiles_tbl;
drop table if exists permissions_tbl;
drop table if exists roles_tbl;
drop table if exists questions_tbl;
drop table if exists positions_tbl;
drop table if exists id_types_tbl;


create table id_types_tbl(
  id_type int not null auto_increment,
  name varchar(255) not null,
  description varchar(255),
  primary key(id_type)
);

create table positions_tbl(
  position_id int not null auto_increment,
  name varchar(255) not null,
  description varchar(255),
  primary key(position_id)
);

create table questions_tbl(
  question_id int not null auto_increment,
  name varchar(255) not null,
  description varchar(1000),
  primary key(question_id)
);

create table roles_tbl(
  role_id int not null auto_increment,
  name varchar(255) not null,
  description varchar(255),
  primary key(role_id)
);

create table permissions_tbl(
  permission_id int not null auto_increment,
  name varchar(255) not null,
  description longtext,
  primary key(permission_id)
);

create table profiles_tbl(
  role_id int not null,
  permission_id int not null,
  primary key(role_id, permission_id),
  constraint fk_role_id foreign key(role_id) references roles_tbl(role_id),
  constraint fk_permission_id foreign key(permission_id) references permissions_tbl(permission_id)
);

create table employees_tbl(
  employee_id varchar(255) not null,
  id_type int not null,
  name varchar(255) not null,
  last_name1 varchar(255) not null,
  last_name2 varchar(255) not null,
  email varchar(255) not null,
  birthdate varchar(255) not null,
  username varchar(255) not null,
  password varchar(255) not null,
  address varchar(255) not null,
  position_id int not null,
  role_id int not null,
  leader_id varchar(255) not null,
  is_leader boolean not null,
  primary key(employee_id),
  constraint unique_email unique(email),
  constraint unique_username unique(username),
  constraint fk_id_type foreign key(id_type) references id_types_tbl(id_type),
  constraint fk_position_id foreign key(position_id) references positions_tbl(position_id),
  constraint fk_leader_id foreign key(leader_id) references employees_tbl(employee_id),
  constraint fk_employee_role_id foreign key(role_id) references roles_tbl(role_id)
);

create table self_assessments_tbl(
  self_assessment_id int not null auto_increment,
  question_id int not null,
  employee_id varchar(255) not null,
  result int not null,
  assesment_period varchar(255) not null,
  primary key(self_assessment_id),
  constraint unique_self_assessment unique(question_id, employee_id, assesment_period),
  constraint fk_self_assesment_question_id foreign key(question_id) references questions_tbl(question_id),
  constraint fk_self_assesment_employee_id foreign key(employee_id) references employees_tbl(employee_id)
);

create table assessments_tbl(
  assessment_id int not null auto_increment,
  question_id int not null,
  employee_id varchar(255) not null,
  leader_id varchar(255) not null,
  assesment_period varchar(255) not null,
  result int not null,
  primary key(assessment_id),
  constraint unique_assessment unique(question_id, employee_id, leader_id, assesment_period),
  constraint fk_assessments_question_id foreign key(question_id) references questions_tbl(question_id),
  constraint fk_assessments_employee_id foreign key(employee_id) references employees_tbl(employee_id),
  constraint fk_assessments_leader_id foreign key(leader_id) references employees_tbl(employee_id)
);
