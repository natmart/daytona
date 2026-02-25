/*
 * Copyright 2025 Daytona Platforms Inc.
 * SPDX-License-Identifier: AGPL-3.0
 */

import { ApiProperty, ApiSchema } from '@nestjs/swagger'
import { RegionQuota } from '../entities/region-quota.entity'

@ApiSchema({ name: 'RegionQuota' })
export class RegionQuotaDto {
  @ApiProperty()
  organizationId: string

  @ApiProperty()
  regionId: string

  @ApiProperty()
  totalCpuQuota: number

  @ApiProperty()
  totalMemoryQuota: number

  @ApiProperty()
  totalDiskQuota: number

  @ApiProperty({ description: 'Time in seconds before an unused snapshot is deactivated', default: 1209600 })
  snapshotDeactivationTimeout: number

  constructor(regionQuota: RegionQuota) {
    this.organizationId = regionQuota.organizationId
    this.regionId = regionQuota.regionId
    this.totalCpuQuota = regionQuota.totalCpuQuota
    this.totalMemoryQuota = regionQuota.totalMemoryQuota
    this.totalDiskQuota = regionQuota.totalDiskQuota
    this.snapshotDeactivationTimeout = regionQuota.snapshotDeactivationTimeout
  }
}
