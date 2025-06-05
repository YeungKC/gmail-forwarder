/**
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
export function main() {
  const props = PropertiesService.getScriptProperties().getProperties();

  if (!props.QUERY || !props.FORWARD_TO) {
    throw new Error(
      'Properties QUERY and FORWARD_TO must be set in script properties.'
    );
  }

  const threads = GmailApp.search(props.QUERY);

  threads
    .map(thread => ({ thread, messages: thread.getMessages() }))
    .filter(({ messages }) => messages.length > 0)
    .map(({ thread, messages }) => ({ thread, message: messages[0] }))
    .forEach(({ thread, message }) => {
      console.log(
        'Forwarding message:',
        message.getSubject(),
        'to',
        props.FORWARD_TO
      );

      message.forward(props.FORWARD_TO);
      thread.markRead();
    });
}
