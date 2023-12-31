(* This file is part of Learn-OCaml.
 *
 * Copyright (C) 2019-2022 OCaml Software Foundation.
 * Copyright (C) 2015-2018 OCamlPro.
 *
 * Learn-OCaml is distributed under the terms of the MIT license. See the
 * included LICENSE file for details. *)

open Learnocaml_data

type 'a storage_key

val init : unit -> unit

val clear : unit -> unit

val store : 'a storage_key -> 'a -> unit

val retrieve : 'a storage_key -> 'a

val delete : 'a storage_key -> unit

val listener : 'a storage_key -> ('a option -> unit) option ref

val cached_exercise : string -> Learnocaml_exercise.t storage_key

val exercise_list : string list storage_key

val exercise_state : string -> Answer.t storage_key

val all_exercise_states : Answer.t SMap.t storage_key

(* The following three accessors are needed because of Answer.solution:
 -- on server: last graded solution;
 -- on localStorage: last edited solution,
    see learnocaml_common.set_state_from_save_file. *)

val graded_list : string list storage_key

val graded_solution : string -> string storage_key

val all_graded_solutions : string SMap.t storage_key

val exercise_toplevel_history : string -> Learnocaml_toplevel_history.snapshot storage_key

val exercise_toplevel_history_list : string list storage_key

val all_exercise_toplevel_histories : Learnocaml_toplevel_history.snapshot SMap.t storage_key

val toplevel_history_list : string list storage_key

val toplevel_history : string -> Learnocaml_toplevel_history.snapshot storage_key

val all_toplevel_histories : Learnocaml_toplevel_history.snapshot SMap.t storage_key

val server_id : int storage_key

val sync_token : Token.t storage_key

val nickname : string storage_key
