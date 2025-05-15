import * as TNH from '@ledgerhq/hw-transport-node-hid'

const { default: TransportNodeHid } = TNH

export const getTransport = async () => await TransportNodeHid.create()
