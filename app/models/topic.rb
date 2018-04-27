# == Schema Information
#
# Table name: topics
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  notes      :text
#  image_url  :string
#  subject_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Topic < ApplicationRecord

  validates :title, presence: true, uniqueness: true
  validates :subject_id, presence: true;

  belongs_to :subject,
    primary_key: :id,
    foreign_key: :subject_id,
    class_name: :Subject

  has_many :questions,
    primary_key: :id,
    foreign_key: :topic_id,
    class_name: :Question,
    inverse_of: :topic

  has_many :answers,
    through: :questions,
    source: :answers

  has_many :dailies,
    primary_key: :id,
    foreign_key: :topic_id,
    class_name: :Daily

  has_many :days,
    through: :dailies,
    source: :day

  has_many :weeks,
    through: :days,
    source: :week

  has_many :tags,
    primary_key: :id,
    foreign_key: :topic_id,
    class_name: :Tag

  has_many :images,
    through: :tags,
    source: :image

end
