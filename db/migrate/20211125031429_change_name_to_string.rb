class ChangeNameToString < ActiveRecord::Migration[6.1]
  def change
    change_column :users, :full_name, :string
  end
end
