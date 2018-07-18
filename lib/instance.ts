import { setGET } from './methods';
import setPath from './path';
import Request from './request';
import { ifElse } from './utilities';

export default {
  getInstances: () => Request(
    setGET,
    setPath(`/linode/instances`),
  ),

  getInstance: (instanceId: number) => Request(
    setGET,
    setPath(`/linode/instances/${instanceId}`),
  ),

  getInstanceBackups: (instanceId: number) => Request(
    setGET,
    setPath(`/linode/instances/${instanceId}/backups`),
  ),

  getInstanceBackup: (instanceId: number, backupId: number) => Request(
    setGET,
    setPath(`/linode/instances/${instanceId}/backups/${backupId}`),
  ),

  getInstanceConfigs: (instanceId: number) => Request(
    setGET,
    setPath(`/linode/instances/${instanceId}/configs`),
  ),

  getInstanceConfig: (instanceId: number, configId: number) => Request(
    setGET,
    setPath(`/linode/instances/${instanceId}/configs/${configId}`),
  ),

  getInstanceDisks: (instanceId: number) => Request(
    setGET,
    setPath(`/linode/instances/${instanceId}/disks`),
  ),

  getInstanceDisk: (instanceId: number, diskId: number) => Request(
    setGET,
    setPath(`/linode/instances/${instanceId}/disks/${diskId}`),
  ),

  getInstanceIPs: (instanceId: number) => Request(
    setGET,
    setPath(`/linode/instances/${instanceId}/ips`),
  ),

  getInstanceIP: (instanceId: number, address: string) => Request(
    setGET,
    setPath(`/linode/instances/${instanceId}/ips/${address}`),
  ),

  getInstanceStats: (instanceId: number, month: number, year: number) => Request(
    setGET,
    ifElse(
      () => month && year,
      setPath(`/linode/instances/${instanceId}/stats/${year}/${month}`),
      setPath(`/linode/instances/${instanceId}/stats`),
    )
  ),

  getLinodesVolumes: (linodeId: number) => Request(
    setGET,
    setPath(`/linode/instances/${linodeId}/volumes`),
  ),
};
