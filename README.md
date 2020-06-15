# Recuperação de Senha

**RF**

- O Usuário deve poder recuperar sua senha informando seu e-mail;
- O Usuário deve receber um e-mail com instrução de recuperação de senha
- O Usuário deve poder resetar sua senha

**RNF**

- Utilizar Mailtrap para testar envios em abiente de desenvolvimento;
- Utilizar Amazon SES para envios em produção.
- O envio de emails deve acontecer em segundo plano (background job).

**RN**

- O link enviado por email para resetar senha deve expirar em 2h.
- O usuário precisa confirmar a nova senha ao resetar sua senha.

# Atualização do Perfil

**RF**

- O usuário deve poder atualizar o seu nome, email e senha

**RN**

- O usuário não pode alterar seu email para um email já utilizado
- Para atualizar sua senha, o usuário deve informar a senha antiga
- Para atualizar sua senha, o usuário precisa confirmr a nova senha

# Painel do Prestador

**RF**

- O prestador deve poder listar seus agendamentos de um dia específico
- O prestador deve receber uma notificação sempre que houver um novo agendamento
- O prestador poder visualizar as notificações não lidas

**RNF**

- Os agendamentos do prestador do dia deve ser armazenado em cache
- As notificaçẽos do prestador deve ser armazenada no MongoDB
- As notificaçẽos do prestador deve ser enviadas em tempo real utilzando Socket.io

**RN**

- A notificação deve ter um status de lida ou não lida para que o prestador possa controlar


# Agendamento de serviços

**RF**

- o usuário deve poder listar todos os prestadores
- o usuário deve poder listar os dias de um mês com pelo menos um horário disponível de um prestador
- o usuário deve poder listar horários disponíveis em um dia específico de um prestador
- o usuário deve poder realizar um novo agendamento com um prestador

**RNF**

- A listagem deve ser armazenda em cache

**RN**

- Cada agendamento deve durar 1h
- Os agendamentos devem estar disponíveis entre 8h às 18h
- O usuário não pode agendar em um horário já ocupado
- O usuário não pode agendar em um horário passado
- O usuário não pode agendar em um horário consigo mesmo.
