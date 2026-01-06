// This is a simplified example config file for quickstart
// Some not frequently used features are omitted/commented out here
// For a full-featured example, please refer to `uptime.config.full.ts`

// Don't edit this line
import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

const pageConfig: PageConfig = {
  // Title for your status page
  title: "lyc8503's Status Page",
  // Links shown at the header of your status page, could set `highlight` to `true`
  links: [
    { link: 'https://github.com/lyc8503', label: 'GitHub' },
    { link: 'https://blog.lyc8503.net/', label: 'Blog' },
    { link: 'mailto:me@lyc8503.net', label: 'Email Me', highlight: true },
  ],
}

const workerConfig: WorkerConfig = {
  // Define all your monitors here
  monitors: [
    // GCP VM SSH #1
    {
      id: 'gcp_vm_ssh_h8_us_iowa',
      name: 'h8-us-lowa-ssh',
      method: 'TCP_PING',
      target: '35.209.34.109:22',
      tooltip: 'GCP VM SSH 連線',
      statusPageLink: 'https://console.cloud.google.com/compute/',
      timeout: 5000,
    },
    // GCP VM SSH #2
    {
      id: 'gcp_vm_ssh_tmpp_us_oregon',
      name: 'tmpp-us-oregon-ssh',
      method: 'TCP_PING',
      target: '35.212.214.116:22',
      tooltip: 'GCP VM SSH 連線',
      statusPageLink: 'https://console.cloud.google.com/compute/',
      timeout: 5000,
    },
    // GCP VM SSH #3
    {
      id: "gcp_vm_ssh_9708hy_delhi",
      name: "9708hy-in-delhi-ssh",
      method: "TCP_PING",
      target: "34.131.20.139:22",
      tooltip: "GCP VM SSH \u9023\u7DDA",
      statusPageLink: "https://console.cloud.google.com/compute/",
      timeout: 5e3
    },
    // GCP VM SSH #4
    {
      id: "gcp_vm_ssh_9708hy_tw",
      name: "9708hy-tw-ssh",
      method: "TCP_PING",
      target: "34.80.9.232:22",
      tooltip: "GCP VM SSH \u9023\u7DDA",
      statusPageLink: "https://console.cloud.google.com/compute/",
      timeout: 5e3
    },
  ],

  // Notification 整段移除或保持不設定即可完全關閉通知
}

// 沒需要維護提示可以改成空陣列；如果你要保留就自己調整 monitors IDs
const maintenances: MaintenanceConfig[] = []

// Don't edit this line
export { maintenances, pageConfig, workerConfig }
