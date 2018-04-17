# == Schema Information
#
# Table name: subjects
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  notes      :text
#  image_url  :string
#  topic_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Subject < ApplicationRecord

  validates :title, presence: true, uniqueness: true
  validates :topic_id, presence: true;

  belongs_to :topic,
    primary_key: :id,
    foreign_key: :topic_id,
    class_name: :Topic

  has_many :questions,
    primary_key: :id,
    foreign_key: :subject_id,
    class_name: :Question,
    inverse_of: :subject

  has_many :answers,
    through: :questions,
    source: :answers

  has_many :dailies,
    primary_key: :id,
    foreign_key: :subject_id,
    class_name: :Daily

  has_many :days,
    through: :dailies,
    source: :day

  has_many :weeks,
    through: :days,
    source: :week

end
