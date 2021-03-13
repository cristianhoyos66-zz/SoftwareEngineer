-- id_types_tbl
insert into id_types_tbl(name) values ('cédula de ciudadanía');
insert into id_types_tbl(name) values ('pasaporte');

-- positions_tbl
insert into positions_tbl(name) values ('team lead');
insert into positions_tbl(name) values ('software developer');

-- questions_tbl
insert into questions_tbl(name, description) 
values (
  'personal relationship', 
  'promotes a healthy coexistence with the other
  collaborators of the organization. maintains an attitude
  of respect and cordiality with internal and external
  customers. also helps his colleagues in necessary moments
  as well as to actively contribute to a good work
  environment.'
);

insert into questions_tbl(name, description) 
values (
  'adaptability to changes', 
  'promotes a healthy coexistence with the other
  collaborators of the organization. maintains an attitude
  of respect and cordiality with internal and external
  customers. also helps his colleagues in necessary moments
  as well as to actively contribute to a good work
  environment.'
);

insert into questions_tbl(name, description) 
values (
  'proactivity', 
  'shows in his behavior the ability to generate viable
                      proposals in order to improve the processes in his work,
                      also shows a willingness to take action, create
                      opportunities and optimize results. shows willingness to
                      carry out activities not typical of their work for the
                      continuous improvement of the organization.'
);

insert into questions_tbl(name, description) 
values (
  'guidelines and rules acceptance', 
  'expresses fulfillment of orders with receptivity and
                      efficiency in the time specified for the task, preserving
                      respect for the policies, regulations and administrative
                      dynamics of the organization.'
);

insert into questions_tbl(name, description) 
values (
  'team work', 
  'actively works towards a goal proposed by your group, you
                      are receptive to the recommendations and changes of your
                      group. motivates and encourages the team in the
                      achievement of goals.'
);

insert into questions_tbl(name, description) 
values (
  'management follow up', 
  'fully complies with the strategic direction (policies,
                      values, objectives, processes, procedures, among others)
                      described in the ms. you use mss as a tool to carry out
                      your work activities, rather than as an obligation that
                      you must fulfill. comply with assigned roles and
                      responsibilities.'
);

insert into questions_tbl(name, description) 
values (
  'responsibility', 
  'demonstrates his sense of responsibility and takes care to
                      fulfill the activities in his charge based on quality,
                      timely delivery. actively participates in the activities
                      scheduled within the work.'
);

insert into questions_tbl(name, description) 
values (
  'assertive communication', 
  'ability to interpret and transmit information in an
                      adequate, clear and timely manner, both verbally,
                      non-verbally and in writing, being prudent and providing
                      feedback in the appropriate contexts.'
);

insert into questions_tbl(name, description) 
values (
  'service oriented', 
  'shows the ability to focus efforts in favor of the
                      service, characterized by its agility, kindness and
                      effectiveness to satisfy not only needs or demands, but
                      also expectations.'
);

insert into questions_tbl(name, description) 
values (
  'achieveness on functions and responsibilities', 
  'fully complies with the functions and / or
                      responsibilities assigned to his position, contained in
                      the employment contract, profile guide and others
                      assigned.'
);

insert into questions_tbl(name, description) 
values (
  'schooling and/or courses:', 
  'complies with the studies related to the profile of the
                      position (in case you are studying to strengthen this
                      aspect, you must report it)'
);

insert into questions_tbl(name, description) 
values (
  'proficiency', 
  'complies with the competencies related to the job profile
                      or profile guide.'
);


insert into questions_tbl(name, description) 
values (
  'Improvement', 
  'Improves everyday on each area related to the job'
);

-- roles_tbl
insert into roles_tbl(name) values ('role test');

-- permissions_tbl
insert into permissions_tbl(name) values ('permission test');

-- profiles_tbl
insert into profiles_tbl(role_id, permission_id) values (1, 1);

-- employees_tbl
insert into employees_tbl(employee_id, id_type, name, last_name1, last_name2, email, birthdate, username, password, address, position_id, role_id, leader_id, is_leader) 
values ('1152455906', 1, 'cristian', 'hoyos', 'jaramillo', 'cristianhoyos66@gmail.com', '11/04/1995', 'anticris66', '123123123', 'street fake 123', 1, 1, '1152455906', true);

insert into employees_tbl(employee_id, id_type, name, last_name1, last_name2, email, birthdate, username, password, address, position_id, role_id, leader_id, is_leader) 
values ('1152455907', 1, 'carolina', 'colorado', 'colmenares', 'carocc029@hotmail.com', '07/29/1998', 'carocc209', '123123123', 'street fake 123', 1, 1, '1152455906', false);

insert into employees_tbl(employee_id, id_type, name, last_name1, last_name2, email, birthdate, username, password, address, position_id, role_id, leader_id, is_leader) 
values ('1152455908', 1, 'pepito', 'perez', 'perez', 'pepito@hotmail.com', '07/29/1998', 'pepo', '123123123', 'street fake 123', 1, 1, '1152455906', true);