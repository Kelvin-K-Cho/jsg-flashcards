# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord

  # Validations

  # Ensures that the instance of a user cannot exist unless the user has a unique username.
  validates :username, presence: true, uniqueness: true

  # Ensures that the session_token and password_digest exist for the user to be valid.
  validates :session_token, :password_digest, presence: true

  # Ensures the password is at least 6 characters long and can be nil.
  # password is different from password_digest where the latter is actually stored.
  validates :password, length: { minimum: 6, allow_nil: true }

  # Define an instance variable to hold the password.
  attr_reader :password

  after_initialize :ensure_session_token

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    user && user.is_password?(password) ? user : nil
  end


  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

end
