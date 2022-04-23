import Status from "./status.interface"

export default interface Task {
  id?: number
  name?: string
  user_id?: number
  status_id?: number
  status?: Status
  created_at?: string
}
