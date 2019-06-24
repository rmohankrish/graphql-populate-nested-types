type SubscriptionPlan implements Node @key("fields": "id") {
  id: ID!
  planName: String
  planType: String
  planDetails: PlanDetail
  planAmount: Float
}
