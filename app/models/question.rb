# == Schema Information
#
# Table name: questions
#
#  id         :integer          not null, primary key
#  sentence   :string           not null
#  subject_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Question < ApplicationRecord
  validates :sentence, presence: true, uniqueness: true
  validates :subject_id, presence: true

  belongs_to :subject,
    primary_key: :id,
    foreign_key: :subject_id,
    class_name: :Subject,
    inverse_of: :questions

  has_many :answers,
    primary_key: :id,
    foreign_key: :question_id,
    class_name: :Answer,
    inverse_of: :question

end
