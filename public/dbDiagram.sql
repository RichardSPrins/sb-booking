# supabase does not allow for array/list of foreign keys, keep this in mind when modeling data

Table users as U {
  id int [pk, increment]
  full_name varchar
  created_at timestamp
  country_code int
  email str
  role str
  hourly_rate int
}

Table teams {
  id int [pk, increment]
  team_name str

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
  coach_id int [ref: > users.id]
  title varcar
  student_ids [int] [ref: >users.id]
}

Table learning_path_step {
  id int [pk, increment]
  title str
  body str
  goals [str]
  sessions [int] [ref: > sessions.id]
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

Table tutorial_comments {
  id int [pk, increment]
  tutorial_id int [ref: > tutorials.id]
  user_id int [ref: > users.id]
  body varchar
  created_at datetime
  updated_at datetime
  reply_to int [ref: > tutorial_comments.id]
}

Table learning_path_comments {
  id int [pk, increment]
  learning_path_id int [ref: > learning_paths.id]
  user_id int [ref: > users.id]
  body varchar
  created_at datetime
  updated_at datetime
}

Table leatning_path_chats {
  id int [pk, increment]
  learning_path_step_id int [ref: > learning_path_step.id]
  session_id int [ref: > sessions.id]
}

Table learning_path_chat_messages {
  id int [ref: > tutorials.id]
  chat_id int [ref: > learning_path_chats.id]
  sender int [ref: > users.id]
  message_body str
  created_at datetime
  tags [int] [ref: > users.id]
}