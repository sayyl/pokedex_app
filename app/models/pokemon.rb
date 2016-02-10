class Pokemon <  ActiveRecord::Base

  validates :name, presence: true, uniqueness: true
  validates :element, presence: true
  validates :level, presence: true
end
