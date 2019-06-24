type Customer implements Node @key("fields": "id") {
    id: ID!
    name: String
    password : String
    email : String
    dob: Date
    address: Address
}
