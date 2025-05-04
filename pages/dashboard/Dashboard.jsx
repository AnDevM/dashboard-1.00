import NavTabs from "../../components/NavTabs"
import WorkQueue from "./WorkQueue"

function Dashboard() {
    return (
        <div className="text-amber-50 pb-40">
            <NavTabs />
            <div className="flex gap-4 mx-4">
                <WorkQueue />
            </div>
        </div>
    )
}

export default Dashboard
