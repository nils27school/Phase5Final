class UserSerializer < ActiveModel::Serializer
  attributes :name, :age, :password_digest, :email, :background
end
