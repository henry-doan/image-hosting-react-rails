class AccountUpdateMailer < ApplicationMailer
  default from: 'contact@email.com' 

  def update_user(user)
    @user = user
    mail(to: @user.email, subject: 'Alert Account has been updated!')
  end
end