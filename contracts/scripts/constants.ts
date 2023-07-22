import { config as dotEnvConfig } from "dotenv";
dotEnvConfig();

export const QUICKNODE_API_KEY = process.env.QUICKNODE_API_KEY;

export const PRIVATE_KEY = process.env.PRIVATE_KEY!;

export const MAILBOX_ADDRESS = "0xCC737a94FecaeC165AbCf12dED095BB13F037685";

export const EAS_ADDRESS = "0xC2679fBD37d54388Ce493F1DB75320D236e1815e";

export const ALCHEMY_API_KEY_MUMBAI = process.env.ALCHEMY_API_KEY_MUMBAI;
export const ALCHEMY_API_KEY_SEPOLIA = process.env.ALCHEMY_API_KEY_SEPOLIA;

