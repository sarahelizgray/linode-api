type Null<T> = null | T;

declare module L {
  export interface RequestConfig { }

  export type Response<T = {}> = Promise<T | Error>;

  export interface InstanceCreateData {
    authorized_keys?: string[]
    backup_id?: string;
    backups_enabled?: boolean;
    booted?: boolean
    image?: string;
    label?: string;
    private_ip?: boolean;
    region: string;
    root_pass?: string;
    stackscript_data?: any;
    stackscript_id?: number;
    swap_size?: number;
    type: string;
  }

  export interface Instance {
    alerts: AlertThresholds;
    backups: { enabled: boolean; scheduled: BackupSchedule; };
    created: string;
    hypervisor: 'kvm';
    id: number;
    image: Null<string>;
    ipv4: string[];
    ipv6: string[];
    label: string;
    region: string;
    specs: any;
    status: InstanceStatuses;
    type: string;
    updated: string;
    watchdog_enabled: boolean;
  }

  export type InstanceResponse = Promise<Instance> | Error;

  export interface InstanceUpdateData {
    alerts?: AlertThresholds;
    backups?: BackupSchedule;
    label?: string,
    watchdog_enabled?: boolean;
  }

  export interface AlertThresholds {
    cpu?: number;
    io?: number;
    network_in?: number;
    network_out?: number;
    transfer_quota?: number;
  }

  export interface BackupSchedule {
    day: Null<BackupDays>;
    window: Null<BackupWindows>;
  }

  export type InstanceStatuses =
    'running' |
    'offline' |
    'booting' |
    'rebooting' |
    'shutting_down' |
    'provisioning' |
    'deleting' |
    'migrating' |
    'rebuilding' |
    'cloning' |
    'restoring';

  export type BackupDays =
    'Scheduling' |
    'Sunday' |
    'Monday' |
    'Tuesday' |
    'Wednesday' |
    'Thursday' |
    'Friday' |
    'Saturday';

  export type BackupWindows =
    'Scheduling' |
    'W0' |
    'W2' |
    'W4' |
    'W8' |
    'W10' |
    'W12' |
    'W14' |
    'W16' |
    'W18' |
    'W20' |
    'W22';

  export type Method =
    'GET' |
    'POST' |
    'PUT' |
    'DELETE';
}

