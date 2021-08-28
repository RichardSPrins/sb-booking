Table users as U {
  id int [pk, increment]
  full_name varchar
  created_at timestamp
  country_code int
  email str
  role str
  hourly_rate int
  game int [ref: > games.id]
}

Table games {
  id int [pk, increment]
  name str
  image str
}

Table sessions {
  id int [pk, increment]
  game int [ref: > games.id]
  coach_id int [ref: > users.id]
  student_id int [ref: > users.id]
  start_time datetime
  review int [ref: > reviews.id]
}

Table learning_paths {
  id int [pk, increment]
  sessions [int] [ref: > sessions.id]
  goal str
  student_id int [ref: > users.id]
  coach_id int [ref: > users.id]
  title varcar
}

Table reviews {
  id int [pk, increment]
  title str
  body varchar
  rating int
  coach_id int [ref: > users.id]
  student_id int [ref: > users.id]
  created_at datetime
  recommended bool
}

Table tutorials {
  id int [pk, increment]
  author int [ref: > users.id]
  title str
  body varchar
  created_at datetime 
  media []
  game str [ref: > games.id]
  updated_at datetime
}

Table comments {
  id int [pk, increment]
  tutorial_id int [ref: > tutorials.id]
  user_id int [ref: > users.id]
  body varchar
  created_at datetime
  updated_at datetime
}
