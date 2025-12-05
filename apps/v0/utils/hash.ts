import { BinaryLike, createHash } from "crypto";

export function hashCode(data: BinaryLike) {
  return createHash("md5").update(data).digest("hex");
}
