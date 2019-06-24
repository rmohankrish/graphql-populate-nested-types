type CustomerAgreement implements Node @key("fields": "id") {
    id: ID!
    customer: Customer
    standardPlan: StandardPlan
    customPlan: CustomPlan
    startDate: Date
    agreementPeriod: String
    validTill: String
    totalAmount: Float
}

type StandardPlan {
  subscriptionPlan: SubscriptionPlan
  quantity: Float  
}

input AddCustomerAgreementInput {
    customer: ID
    standardPlan: StandardPlanInput
    customPlan: CustomPlanInput
    startDate: Date
    agreementPeriod: String
    validTill: String
    totalAmount: Float
}

input StandardPlanInput {
  subscriptionPlan: ID
  quantity: Float
}
