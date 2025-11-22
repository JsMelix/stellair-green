#![no_std]
use soroban_sdk::{contract, contractimpl, symbol_short, Address, Env, Map, String, Symbol, Vec};

#[contract]
pub struct Market3WContract;

#[contractimpl]
impl Market3WContract {
    // Crea o actualiza un proyecto con id (u64)
    pub fn set_project(env: Env, id: u64, owner: Address, name: String, description: String) {
        owner.require_auth();
        
        let projects_key = symbol_short!("projects");
        let mut projects: Map<u64, Vec<String>> = env
            .storage()
            .persistent()
            .get(&projects_key)
            .unwrap_or(Map::new(&env));
        
        let mut record = Vec::new(&env);
        record.push_back(name.clone());
        record.push_back(description);
        record.push_back(owner.to_string());
        
        projects.set(id, record);
        env.storage().persistent().set(&projects_key, &projects);
    }

    // Retorna nombre y descripción si existe
    pub fn get_project(env: Env, id: u64) -> Option<Vec<String>> {
        let projects_key = symbol_short!("projects");
        let projects: Option<Map<u64, Vec<String>>> = env.storage().persistent().get(&projects_key);
        match projects {
            Some(m) => m.get(id),
            None => None,
        }
    }

    // Contador sencillo por key
    pub fn increment(env: Env, key_id: Symbol) -> i128 {
        let mut count: i128 = env
            .storage()
            .persistent()
            .get(&key_id)
            .unwrap_or(0);
        count += 1;
        env.storage().persistent().set(&key_id, &count);
        count
    }

    pub fn get_count(env: Env, key_id: Symbol) -> i128 {
        env.storage().persistent().get(&key_id).unwrap_or(0)
    }
}
