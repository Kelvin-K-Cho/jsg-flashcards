# == Schema Information
#
# Table name: sides
#
#  id         :integer          not null, primary key
#  answer     :text             not null
#  correct    :boolean          default(FALSE), not null
#  card_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class SideTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
