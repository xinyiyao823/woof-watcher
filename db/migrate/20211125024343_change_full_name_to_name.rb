class ChangeFullNameToName < ActiveRecord::Migration[6.1]
  def change
    change_column :users, :full_name, :name
  end
end
