import BoxAnalyysis from "@/modules/admin/dashbooard/box-analysis"
import TotalListing from "@/modules/admin/dashbooard/total-listing"
import TotalProfit from "@/modules/admin/dashbooard/total-profit"
import TotalRevenue from "@/modules/admin/dashbooard/total-revenue"

const AdminDasboard = () => {
  return (
    <div className="pt-4">
      <BoxAnalyysis/>
      <div className="mt-8 flex border border-[#343B4F] rounded-[16px]">
        <div className="lg:w-[67%] px-4 py-12 border-r  border-[#343B4F]">
          <TotalRevenue/>
        </div>
        <div className="lg:w-[33%]">
          <div className="bordr-b border-[#343B4F]">
            <TotalProfit/>
          </div>
          <div>
            <TotalListing/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminDasboard