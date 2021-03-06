# == Schema Information
#
# Table name: answers
#
#  id          :integer          not null, primary key
#  sentence    :text             not null
#  correct     :boolean          default(FALSE)
#  question_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Answer < ApplicationRecord

  validates :sentence, :question_id, presence: true
  validates :correct, inclusion: { in: [ true, false ] }

  belongs_to :question,
    primary_key: :id,
    foreign_key: :question_id,
    class_name: :Question,
    inverse_of: :answers

  has_one :topic,
    through: :question,
    source: :topic

end
