export const resolvers = {
  Query: {
    getCustomerAgreements: async (parent, args, { me, mongoModels }) => {
      //Build Filters
      //Set limits
      
      const customerAgreements = await mongoModels.CustomerAgreement
                                        .find(filters)
                                        .populate('standardPlan.subscriptionPlan')
                                        .limit(pagelimit);
      //build edges
      //build pagination data
      //return edges and pageinfo
    }
  }
}
