// Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
// See LICENSE in the project root for license information.

/**
 * Encapsulates information about an error
 */
export class TaskError extends Error {
  protected _type: string;

  public constructor(type: string, message: string) {
    super(message);

    this._type = type;
  }

  public get message(): string {
    return `[${this._type}] '${super.message}'`;
  }

  public toString(): string {
    return this.message;
  }
}
